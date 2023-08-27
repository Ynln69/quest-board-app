import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBoards } from 'redux/boards/boardsSelectors';
import { useParams } from 'react-router';
import { editBoard } from 'redux/boards/boardOperations'; 

import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { MainDashboard } from 'components/MainDashboard/MainDashboard';

import { boardBackgrounds } from 'constants/boardBackgrounds';

import { ContainerDashboard, DynamicContainer } from './Dashboard.styled';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  const board = boards.filter(board => board.title === boardName)[0];
  const [cardData, setCardData] = useState(
    board !== undefined ? board.boardsData : null
  );
  const [editFlag, setEditFlag] = useState(false);

  useEffect(() => {
    const selectedBoard = boards.find(board => board.title === boardName);
    if (selectedBoard) {
      setCardData(selectedBoard.boardsData);
    }
  }, [boardName, boards]);

  useEffect(() => {
    if (editFlag) {
      const newBoard = {
        ...board,
        boardsData: cardData,
      };

      dispatch(editBoard({ newBoard, id: newBoard._id }));
      setEditFlag(false);
    }
  }, [cardData, editFlag, board, dispatch]);

  const handleBackground = () => {
    const boardBg =
      boards.find(board => board.title === boardName)?.background || 'bg1';
    if (boardBg === 'bg1') {
      return 'bg1';
    }
    const photo = boardBackgrounds.find(photo => photo[boardBg]);
    return photo[boardBg];
  };

  return (
    <>
      {boards.length !== 0 && (
        <DynamicContainer photo={handleBackground()}>
          <ContainerDashboard>
            {board !== undefined && (
              <>
                <HeaderDashboard boardName={board.title} />
                <MainDashboard
                  cardData={cardData}
                  setCardData={setCardData}
                  setEditFlag={setEditFlag}
                />
              </>
            )}
          </ContainerDashboard>
        </DynamicContainer>
      )}
    </>
  );
};
